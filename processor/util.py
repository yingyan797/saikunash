def create_dict():
    wdict = open("processor/dict.js", "w")
    vocab, label = [], ""
    with open("vocab.txt", "r") as f:
        while True:
            line = f.readline().strip()
            if line.startswith("0. "):
                label = line[3:]
            if not label:
                continue
            elif ":" in line:
                segs = line.split(":")
                skn = segs[1][1:]
                eng = segs[0].split("/")
                vocab.append([skn, eng, label])
            elif line.startswith("#eof"):
                break
    vocab.sort()
    wdict.write(f"const vocab = {vocab}")
    wdict.close()

if __name__ == "__main__":
    create_dict()
