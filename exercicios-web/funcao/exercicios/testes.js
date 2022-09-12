function arrayDiff(a, b) {
    for (i = 0; i < b.length; i++){ 
        for(j = 0; j < a.length; j++){
            console.log(b[i], a[j]);
            if (a[j] == b[i]){
                a.splice(j, 1);
                j--;
            }
        }
    }

    return a
  }

  console.log(arrayDiff([1,2,2,2,2,2], [2]));