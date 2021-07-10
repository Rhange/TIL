# 다형성(polymorphism)

> 클래스가 데이터 타입에 따라 다양한 형태로 보여질 수 있다.

[출처-'쉽게 배우는 자바2', 생활코딩, 부스트코스](https://www.boostcourse.org/cs128/lecture/264971/?isDesc=false)

```java
interface Calculable {
	double PI = 3.14;
	int sum(int v1, int v2);
}

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
		// 객체 타입으로 'RealCal'이 아닌 interface인 'Calculable'이 올 수 있다.
		// 그러나 이 경우에 인스턴스 'c'는 Printable interface의 기능들은 사용할 수 없다.
		Calculable c = new RealCal();
		System.out.println(c.sum(2, 1));
		c.print();	// compile Error
		System.out.println("c.PI : " + c.PI);
	}
}

```

클래스의 인스턴스를 어떤 변수에 선언할 때, `해당 클래스의 데이터 타입`으로 선언하지 않고 **부모 클래스나 인터페이스를 데이터 타입으로 선언할 수도 있다.**

이렇게 어떤 자식 클래스가 부모 클래스를 상속받았고, 인터페이스를 implements하고 있다면 이 자식 클래스는 타입으로 부모 클래스나 인터페이스를 받을 수 있는 것을 다형성(polymorphism)이라고 한다.
