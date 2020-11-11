import { CommonSchedule, Provide, Schedule } from '@midwayjs/decorator';

@Provide()
@Schedule({
  type: 'worker',
  interval: 1000,
  env: ['prod'],
  immediate: true,
})
export class Test1 implements CommonSchedule {
  async exec() {
    console.log('test1');
  }
}
