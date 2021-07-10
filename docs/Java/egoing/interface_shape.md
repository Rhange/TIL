# 인터페이스 형식

[출처-'쉽게 배우는 자바2-인터페이스 형식', 생활코딩, 부스트코스](https://www.boostcourse.org/cs128/lecture/264970/?isDesc=false)

## 코딩 스타일

- 인터페이스 이름은 클래스와 마찬가지로 `첫 글자`를 `대문자`로 만든다.
- '~을 할 수 있는' 것들의 규격이라는 의미에서 `형용사`의 이름을 붙이기도 한다.

## 여러개의 interface를 implements 가능

클래스를 상속(`extends`)할 때는 `하나`의 클래스로부터 상속받을 수 있는 것과 대조적(반대)로 인터페이스는 `여러 개`를 모두 적용할 수 있다. 이와 같은 경우에는 적용한 인터페이스들의 모든 메소드들을 구현해야한다.

인터페이스에는 변수(`variable`)를 정의할 수도 있다. 다만 변수는 반드시 `초기화`(값이 할당)되어야 한다.

- 인터페이스를 적용한 클래스는 `변수를 재할당할 수 없다.`

```java
interface Calculable {
	// interface에서 변수를 정의할 때는 value도 적는다.
	double PI = 3.14;
	int sum(int v1, int v2);
}

// interface의 이름은 대문자로 시작하고 형용사로 사용하는게 보편적
interface Printable {
	void print();
}

class RealCal implements Calculable, Printable {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}

	public void print() {
		System.out.println("This is RealCal!!");
	}
}

public class InterfaceApp {
	public static void main(String[] args) {
		// 더하기 기능이 있는 클래스를 만들어주세요.
		RealCal c = new RealCal();
		System.out.println(c.sum(2, 1));
		c.print();
		System.out.println("c.PI : " + c.PI);
	}
}
```
