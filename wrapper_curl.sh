#/bin/bash
curl -X POST http://auto:b83046d2a9051afad92039752bc9059f@localhost:8080/job/api_json/build\?token\=test_token \
  --form json='{"parameter": [{"name":"VALUE", "value":"testasdasdasds"}]}'
