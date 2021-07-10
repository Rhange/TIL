# 인터페이스(Interface) 소개

[출처-부스트코스 '쉽게 배우는 자바2'](https://www.boostcourse.org/cs128/lecture/264969?isDesc=false)

세상에는 `표준`이라는 `규격`이 있다. 마치 가정용 전기 제품은 `220V` `교류` 전기를 사용하는 것처럼

클래스를 생성할 때도 이러한 약속, 규격에 해당하는 것이 `인터페이스`라고 할 수 있다.

```java
interface Calculable {
	int sum(int v1, int v2);
}

class RealCal implements Calculable {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}
}

public class InterfaceApp {
	public static void main(String[] args) {
		// 더하기 기능이 있는 클래스를 만들어주세요.
		RealCal c = new RealCal();
		System.out.println(c.sum(2, 1));
	}
}
```

만들고자 하는 `class`의 `method` 형식을 `interface`에 미리 선언해 놓으면 `interface`를 이용해서(`implements` 키워드 활용) 다른 사람이 의도한 해도 클래스를 만들 수 있다.

- `@override` 어노테이션을 활용해서 인터페이스의 메소드를 이제 클래스에서 구현하면 된다.

---

Interface는 아래의 상황에서 유용하게 사용될 수 있다.

1. 여러 목적의 클래스들이 공통적으로 가지고자 하는 기능을 하나로 묶고자 할 때
2. 다른 사람들과 협업할 때, 기능을 명확히 전달하고 싶을 때
3. 클래스의 기능들이 너무 많아져서, 선택적으로 사용자에게 제공하고 싶을 때
