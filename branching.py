import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = int(sys.argv[1])
second_number = int(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number

if result_sum <=0:
    print("You have chosen the path of destitution.")
elif result_sum <=100:
    print('You have chosen the path of plenty.')
else:
    print("You have chosen the path of excess.")