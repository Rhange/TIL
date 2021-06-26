# Constructor와 This

## Constructor(생성자)

처음부터 Instance를 생성할 때, `delimiter`를 지정할 수 없을까?

```java
class Print {
	public String delimiter = "";
	public Print(String delimiter) {
		this.delimiter = delimiter;
	}
	public void A() {
		System.out.println(delimiter);
		System.out.println("A");
		System.out.println("A");
	}
	public void B() {
		System.out.println(delimiter);
		System.out.println("B");
		System.out.println("B");
	}
}
public class MyOOP {
    public static void main(String[] args) {
        Print p1 = new Print("----");
        p1.A();
        p1.A();
        p1.B();
        p1.B();

        Print p2 = new Print("****");
        p2.A();
        p2.A();
        p2.B();
        p2.B();


        p1.A();
        p2.A();
        p1.A();
        p2.A();
    }
}
```

- class는 instance를 생성할 때 class의 이름과 같은 이름인 `constructor`로 instance를 만든다.

- class는 따로 만들어 주지 않아도 `기본 생성자`를 포함하고 있다.

- `Print()`와 같이 아무것도 지정하지 않은 생성자를 기본 생성자라고 한다.

- 기본적으로 `public` 권한으로 설정되어 있어서 따로 명시하지 않아도 class를 만들게 되면 새로운 instance를 생성할 수 있도록 만든다.

만약 처음에 instance를 생성할 때부터 field를 초기화하고 싶다면, field를 초기화할 수 있게 만드는 생성자를 구성할 수 있다.

생성자는 **접근 권한**을 설정할 수 있고, **`return` 타입**은 명시하지 않으며, 초기화할 field에 따라 parameter를 설정한다.

## This

constructor도 class 내부의 method이고, 보통 초기화할 field를 parameter로 넣기 때문에 constructor 내부에서 field에 접근할 때 parameter의 이름과 같게 되어 접근하기 어렵게 된다.

이 때 사용하는 `예약어`가 `this`인데, this는 **instance를 가리키는 예약어**이다. this를 통해 field를 손쉽게 사용할 수 있다.
