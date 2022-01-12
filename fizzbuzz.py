import sys

# Set up a list for our code to work with that omits the first CLI argument,
# which is the name of our script (list_iteration.py)
order_of_succession = sys.argv
order_of_succession.pop(0)
#order_of_succession=[30,200,7,6]
for i in range(0, len(order_of_succession)):
    order_of_succession[i] = int(order_of_succession[i])
    if order_of_succession[i] % 15==0:
        print('fizzbuzz')
    elif order_of_succession[i] % 5==0:
        print('buzz')
    elif order_of_succession[i] % 3 == 0:
        print('fizz')
    else :
        print(str(order_of_succession[i]))