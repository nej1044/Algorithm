from functools import reduce

def solution(num_list):
    if len(num_list) > 10:
        return reduce(lambda acc, cur:acc+cur, num_list, 0)
    else:
        return reduce(lambda acc, cur:acc*cur, num_list, 1)