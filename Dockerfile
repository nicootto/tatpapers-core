# Use an official Python runtime as a parent image
FROM python:3.7

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . /app

RUN python manage.py collectstatic --no-input