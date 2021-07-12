# Inheritance and Interface

## Inheritance (상속)

> 어떤 클래스와 비슷한 다른 것을 만들고 싶다면?

1. 그 클래스의 변수와 메소드들을 모두 복사해서 만드는 방법
2. 상속을 이용하는 방법

어떤 클래스를 상속해서 새로운 클래스를 만들게 되면, 어떤 클래스의 **모든 변수와 메소드들**이 기본적으로 새로운 클래스에 **포함**되게 되고, 만약 부족하다면 기존의 변수와 메소드를 **덮어쓰거나(`overriding`)**, 아예 새로운 변수와 메소드를 추가할 수도 있다.

두 개의 클래스를 만들어야 하고 한 클래스가 다른 클래스의 기능들을 모두 포함하는 형태라면 어떻게 해야 할까? 모두 복사해서 넣어주어야 할까?

```java
class Cal {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}
}

//make new class Cal2 which has minus method
class Cal2 {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}

	public int minus(int v1, int v2) {
		return v1 - v2;
	}
}

public class InheritanceApp {

	public static void main(String[] args) {
        Cal c = new Cal();
        System.out.println(c.sum(2, 1));  // 3

        // Dose Cal2 class have sum method?
        Cal2 c2 = new Cal2();
        System.out.println(c2.sum(2, 2)); // 4
        System.out.println(c2.minus(2, 2)); // 0
	}

}
```

위와 같은 경우에 이용하면 좋은 기능이 상속(`inheritance`)이다.

```java
class Cal {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}
}

class Cal3 extends Cal {
	public int minus(int v1, int v2) {
		return v1 - v2;
	}
}

public class InheritanceApp {

	public static void main(String[] args) {
		Cal c = new Cal();
		System.out.println(c.sum(2, 1));

		// Dose Cal3 class have sum method?
		Cal3 c3 = new Cal3();
		System.out.println(c3.sum(2, 3));	// 5
		System.out.println(c3.minus(2, 3));	// -1
	}

}
```

## Overriding (재정의)

만약 부모클래스(`superclass`)가 가진 기능을 더 보태서 멋지게 만들려고 하면 어떻게 해야 할까? 같은 이름을 사용해서 다시 재정의(`override`)하여 만들 수 있다.

```java
class Cal {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}
}

class Cal3 extends Cal{

	public int sum(int v1, int v2) {
		System.out.println("Cal3!!!");
		return v1 + v2;
	}

	public int minus(int v1, int v2) {
		return v1 - v2;
	}
}
```

## Overloading (오버로딩)

- `Overloading`은 상속과는 직접적인 관련이 없다.
- 특정 이름을 지닌 메소드가 있다고 할지라도 같은 이름을 가진 메소드를 또 만들 수 있다. **다만, 파라미터의 형식이 달라야 한다.**

```java
class Cal {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}

	// Overloading
	public int sum(int v1, int v2, int v3) {
		return v1 + v2 + v3;
	}
}

public class InheritanceApp {

	public static void main(String[] args) {
		Cal c = new Cal();
		System.out.println(c.sum(2, 1)); // 3
		System.out.println(c.sum(2, 1, 3)); // 6
	}

}
```

같은 이름을 가진 메소드라고 해도, 메소드를 호출(`call`)할 때는 파라미터의 형식도 모두 보기 때문에 프로그램은 각각의 메소드가 서로 다른 역할을 한다는 것을 안다.

- 반면에 `overriding`은 같은 클래스 안에서 이뤄질 수 없고, 상속 관계를 가진 클래스 사이에서 이뤄질 수 있다.

## Interface (인터페이스)

일종의 규격과 같은 것이다. 인터페이스는 앞으로 어떤 클래스를 만들지는 전혀 모르지만, 그 클래스에 대한 **규격을 선언하는 것**이다.
