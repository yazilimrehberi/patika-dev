my_list = [[1, 'a', ['cat'], 2], [[[3]], 'dog'], 4, 5]
new_list = []

def flatten(x):
    if isinstance(x, list):
        for i in x:
            flatten(i)
    else:
        new_list.append(x)

flatten(my_list)

print(new_list)