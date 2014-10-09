NPM_BIN=$(CURDIR)/node_modules/.bin
DEST_DIR=$(CURDIR)/dest

all: clean js css

clean:
	rm -rf $(DEST_DIR)/
	mkdir dest

CHOSEN_DIR=$(CURDIR)/bower_components/chosen/coffee/

js: $(CHOSEN_DIR)lib/select-parser.coffee $(CHOSEN_DIR)lib/abstract-chosen.coffee $(CHOSEN_DIR)chosen.jquery.coffee
	$(NPM_BIN)/coffee --print  $^ > $(DEST_DIR)/chosen.jquery.js
	$(NPM_BIN)/uglifyjs $(DEST_DIR)/chosen.jquery.js -o $(DEST_DIR)/chosen.jquery.min.js

css: $(CURDIR)/bower_components/bootstrap/less/bootstrap.less
	$(NPM_BIN)/lessc $^ $(DEST_DIR)/boostrap.css
	$(NPM_BIN)/csso $(DEST_DIR)/boostrap.css $(DEST_DIR)/boostrap.css
