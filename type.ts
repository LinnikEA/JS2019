interface WorkerSchema{
	firstName: string;
	lastName: string;
	job: string;
	isValid: boolean;

} 

const workers: WorkerSchema[] = [];


const isWorkerValid = (worker: WorkerSchema): boolean => {
	return worker.isValid;
}

for (let i = 0; i < 10; i++) {
	const worker = {
		firstName: 'First Name ' + i,
		lastName: 'Last Name ' + i,
		job: 'Job ' + i,
		isValid: true
	};

	if (isWorkerValid(worker)) {
		workers.push(worker);
	}
}

console.log(workers);