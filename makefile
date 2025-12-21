
.phony: compile everything and prepare for github page deployment
compile:
	@echo "Compiling the project..."
	npm run build
	cp ~/ride.driver.frontend/dist/assets/*.js ~/ride.driver.frontend/docs/assets/*.js
	cp ~/ride.driver.frontend/dist/assets/*.css ~/ride.driver.frontend/docs/assets/*.css
	git add .