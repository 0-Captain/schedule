import { CommonSchedule, Provide, Schedule } from '@midwayjs/decorator';

@Provide()
@Schedule({
  type: 'worker',
  interval: 1000,
  env: ['staging'],
  immediate: true,
})
export class Test3 implements CommonSchedule {
  async exec() {
    console.log('test3');
  }
}
