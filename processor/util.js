function search_skn(query) {
    let res = "<table><tr><th>Word</th><th>Meaning</th><th>Category</th></tr>";
    if (query.indexOf(" ") < 0) {
        for (const entry of vocab) {
            if (query[0] == entry[0][0]) {
                let i = 1;
                let wtml = "<b>"+query[0]+"</b>";
                for (let j=1; j < entry[0].length; j++) {
                    if (entry[0][j] == query[i]) {
                        i++;
                        wtml += "<b>"+entry[0][j]+"</b>";
                    } else {
                        wtml += entry[0][j];
                    }
                    if (i >= query.length) {
                        wtml += entry[0].substring(j+1);
                        break;
                    }
                }
                if (i >= query.length) {
                    res += "<tr><td>"+wtml+"</td><td>"+entry[1]+"</td><td>"+entry[2]+"</td></tr>";
                }
            } else if (query[0] < entry[0][0]) {
                break;
            }
            
        }
    } else {
        for (const entry of vocab) {
            let miss = false;
            let i = 0;
            let wtml = "";
            for (const w of query.split(" ")) {
                const j = entry[0].indexOf(w, i);
                if (j < 0) {
                    miss = true;
                    break;
                }
                wtml += entry[0].substring(i,j) + "<b>"+w+"</b>";
                i = j+w.length;
            }
            wtml += entry[0].substring(i);
            if (!miss) {
                res += "<tr><td>"+wtml+"</td><td>"+entry[1]+"</td><td>"+entry[2]+"</td></tr>";
            }
        }
    }
    return res+"</table>"
}