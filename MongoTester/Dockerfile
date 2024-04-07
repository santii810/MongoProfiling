FROM python:3.12.1-slim-bullseye
RUN apt-get update && apt-get install -y --no-install-recommends curl wget git iputils-ping pip font-manager
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY code .
RUN jupyter nbconvert --to script Mongo-tests.ipynb
ENTRYPOINT [ "python","-u", "Mongo-tests.py" ]
