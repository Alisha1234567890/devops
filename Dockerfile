# Dockerfile

FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y python3 curl && \
    apt-get clean

CMD ["bash"]
