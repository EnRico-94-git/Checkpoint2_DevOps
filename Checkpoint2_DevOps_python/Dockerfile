FROM python:3.9-slim

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

ARG APP_NAME=appRM552082.py
ENV APP_NAME=${APP_NAME}

CMD ["python","${APP_NAME}"]