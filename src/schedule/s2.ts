import { CommonSchedule, Provide, Schedule } from '@midwayjs/decorator';

@Provide()
@Schedule({
  type: 'worker',
  interval: 1000,
  env: ['staging'],
  immediate: true,
})
export class Test2 implements CommonSchedule {
  async exec() {
    console.log('test2');
  }
}
