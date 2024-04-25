FROM python:3.9-slim

WORKDIR /app

ARG APP_NAME='testando'
ENV APP_NAME=${APP_NAME}

COPY ${APP_NAME} .

CMD python ${APP_NAME}