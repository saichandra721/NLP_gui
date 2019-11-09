import json
with open('nlp_que.jsonl') as json_file:
  lines=[]
  for line in json_file.read().split('\n'):
    ekpiece = json.loads(line)
    # print(ekpiece["question"]["stem"])
    answer_key = ekpiece["answerKey"]
    ans = [ekpiece["question"]["stem"]]
    for a in ekpiece["question"]["choices"]:
      ans.append(a["text"])
    lines.append(ans)
  print(lines)