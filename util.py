with open("alphabet.csv", "w") as f:
    c = ord('a')
    for i in range(26):
        f.write(chr(c+i)+",\n")