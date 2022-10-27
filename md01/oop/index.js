class Char {
  constructor(name, hp, mp, power, armor) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.power = power;
    this.armor = armor;
  }

  basicAttack(armor) {
    return this.power - armor;
  }

  takeDamage(amount) {
    this.hp = this.hp - amount;

    if (this.hp <= 0) {
      return `${this.name} morreu.`;
    }

    return this.hp;
  }
}

class Playable extends Char {
  constructor(name, hp, mp, power, armor, bag, level) {
    super(name, hp, mp, power, armor);
    this.bag = bag;
    this.power = power * 2;
    this.level = level;
  }

  takeItem(item) {
    this.bag.push(item);
  }

  spell01(armor) {
    return this.power * this.level - armor;
  }
}
