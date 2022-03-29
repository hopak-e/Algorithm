function NotSelfnumber(N){
    // 셀프 넘버 아닌 것을 만드는 함수
    let sum = N

    while(true){   
        if(N == 0) break; //N이 0일 될 때까지 반복
        sum += N%10 
        // 숫자가 2345 일시 처음 나머지는 5
        N = parseInt(N/10) 
        // 여기서 10으로 나눈 값은 234 이걸 다시 위로 올려서 반복
        // sum에 5, 4, 3, 2 순으로 더해지는 것
    }
    return sum;  // 마지막으로 다 더해준 값을 리턴한다.
}

function selfnumber(N){
    // 셀프 넘버를 만들어 보자
    let selfnum = []
    let result = []

    for(let i=1; i <= N; i++){
        let index = NotSelfnumber(i); 
        //함수를 index로 정의해주고
        if(index <= N){
            // N보다 작거나 같은 조건에
            selfnum[index] = true;
            //index에 있는 값들을 true로 반환
        }
    }

    for(let i=1; i<= N; i++){
        if(!selfnum[i]) result.push(i);
        //셀프넘버는 index값이 아닌 index에 포함되지 않는 숫자들이므로
        // !selfnum~을 해준다.
    }
    console.log(result.join('\n'));
}

selfnumber(10000);