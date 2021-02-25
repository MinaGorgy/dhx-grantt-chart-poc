import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		var tasks = [];
		for(var i = 1; i<5000;i++)
		{
			var task = {
				id: i + 1,
				start_date: "03-04-2018",
				text: "Task#" + (i + 1),
				progress: 1,
				duration:"5"
			}
			tasks.push(task);
		}
		let links = [
			{id: 1, source: 1, target: 2, type: '0'}
		];
		return {tasks, links};
	}
}