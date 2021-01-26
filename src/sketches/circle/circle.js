import Sketch from '../../Sketch';

export default class Circle extends Sketch {
    Sketch = (p) => {
      p.setup = () => {
        p.createCanvas(512, 512);
      };

      p.draw = () => {
        p.background(20);
        p.ellipse(p.width / 2, p.height / 2, 100);
      };
    }
}
