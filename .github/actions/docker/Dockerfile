FROM debian:11

RUN apt-get update && \
    apt-get install -y cowsay && \
    rm -rf /var/lib/apt/lists/*

ENV PATH="${PATH}:/usr/games"

ENTRYPOINT ["cowsay"]
