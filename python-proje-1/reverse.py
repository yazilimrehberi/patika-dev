my_list = [[1, 2], [3, 4], [5, 6, 7]]

def reverse(l):
    for i in l:
        if isinstance(i, list):
            i.reverse()
    l.reverse()
    print(l)

reverse(my_list)
