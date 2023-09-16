// 노드와 간선, 최단경로
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

class Queue {
	constructor(){
		this.queue = [];
		this.front = 0;
		this.rear = 0;
	}

	enqueue(value){
		this.queue[this.rear++] = value;
	}

	dequeue(){
		const value = this.queue[this.front];
		delete this.queue[this.front];
		this.front++;
		return value;
	}

	isEmpty() {
        return this.rear === this.front;
    }
}

function solution(n, edge) {
    // 먼저 그래프 구현
    const graph = Array.from(Array(n+1), () => []);
    
    for(const [src, dest] of edge){
        graph[src].push(dest);
        graph[dest].push(src); // 양방향 간선
    }
    
    const distance = Array(n+1).fill(0); // 거리 저장
    distance[1] = 1;
    
    // BFS
    const queue = new Queue();
    queue.enqueue(1);
    while(!queue.isEmpty()){
        const src = queue.dequeue();
        for(const dest of graph[src]){
            if(distance[dest] === 0){
                queue.enqueue(dest);
                distance[dest] = distance[src] +1;
            }
        }
    }
    const max = Math.max(...distance);
    return distance.filter(item => item === max).length;
}