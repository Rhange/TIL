# 상속과 생성자

부모 클래스에 생성자가 있는 경우에 자식 클래스의 생성자는 무엇을 호출하는가?

자식 클래스에 이미 해당하는 생성자가 만들어져 있다면 그것을 호출하겠지만, 그렇지 않다면 암묵적(implicit)으로 부모 클래스의 생성자(`super()`)를 호출한다.

하지만 상속관계에 있는 클래스의 생성자에 기본 생성자(args가 없는 생성자, default constructor)가 아닌 **args가 포함된 생성자를 사용하는 경우** 주의해야 한다.

```java
class Cal{
  int v1,v2;
  // Cal's constructor
  Cal(int v1, int v2) {
      System.out.println("Cal init!!");
      this.v1 = v1;
      this.v2 = v2;
  }
  public int sum() {
    return this.v1+v2;
  }
}

// Compile Error
class Cal3 extends Cal{

  public int minus() {
    return this.v1-v2;
  }

}
```

위의 코드처럼 부모 클래스에 기본 생성자가 아닌 **args를 주는 생성자만 명시된 경우**, 자식 클래스에서 생성자를 명시적으로 만들지 않는다면 컴파일이 되지 않는다.

그 이유는 자식 클래스에서 생성자를 호출하는 경우(instance를 생성하는 경우), **따로 정의해놓은 생성자가 없기 때문에** 부모 클래스의 생성자(`super()`)를 사용해야 하는데, 명시적으로 **args를 받는 생성자만 부모 클래스에 만들어져 있기 때문에** 기본 생성자가 없는 것으로 받아들여지기 때문이다.

그러므로 부모 클래스에 **args를 받는 생성자만 만들었을 경우**에는 아래와 같이 자식 클래스에도 args를 받는 생성자를 만들어야 한다. (with `super()`)

```java
class Cal {
	int v1, v2;

	Cal(int v1, int v2) {
		System.out.println("Cal init!!");
		this.v1 = v1;
		this.v2 = v2;
	}

	public int sum() {
		return this.v1 + v2;
	}
}

class Cal3 extends Cal {

	Cal3(int v1, int v2) {
		super(v1, v2);
		System.out.println("Cal3 init!!");
	}

	public int minus() {
		return this.v1 - v2;
	}

}

public class InheritanceApp {

	public static void main(String[] args) {
		// c is instance
		Cal c = new Cal(2, 1);

		// Dose Cal3 class have sum method?
		Cal3 c3 = new Cal3(2, 1);
		System.out.println(c3.sum()); // 3
		System.out.println(c3.minus()); // 1
	}

}
```

하위 클래스의 생성자에서 `super`를 사용할 때 주의할 점은 `super`가 **가장 먼저 나타나야 한다**는 점이다. 즉 부모가 초기화되기 전에 자식이 초기화되는 일을 방지하기 위한 정책이라고 생각하자. - 생활코딩
