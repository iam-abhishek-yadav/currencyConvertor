### Steps to Run the Application

- **Create a Docker Image:** Replace `<tag-name>` with a tag of your choice:
	```bash
	docker build -t <tag-name> .
	```
- **Run the Docker Container:** 
	```bash
	docker run -p 5000:5000 <tag-name>
	```