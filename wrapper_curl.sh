#/bin/bash
curl -X POST http://admin:admin@35.156.82.159:8080/job/api_json/build\?token\=test_token \
  --form json='@curl.json'
