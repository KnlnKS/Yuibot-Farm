FROM hayd/alpine-deno:1.8.0

# Create app directory
WORKDIR /home/deno/app

# Switch user from root to deno
USER deno

# Copy files
COPY --chown=deno:deno src .

# Cache dependencies
RUN deno cache deps.ts

# Cache app
RUN deno cache index.ts

# ARGS
ARG URL
ARG AUTH
ENV URL_FLAG="--url="${URL}""
ENV AUTH_FLAG="--auth="${AUTH}""

CMD deno run --allow-net index.ts $URL_FLAG $AUTH_FLAG