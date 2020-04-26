# Use an official Python runtime as a parent image
FROM python:3.7

ENV PYTHONUNBUFFERED 1

WORKDIR /code

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . /code

RUN python manage.py collectstatic --no-input