# Access Level Modifiers (접근 제어)

## private

해당 class 안에 있는 method, field만 사용할 수 있음.

```java
public class AccessLevelModifiersMethod {
	// public, protected, default, private
	private static void hi() {
		System.out.println("Hi");
	}

	public static void main(String[] args) {
		hi();
	}
}
```

## public

다른 class 안에 있는 method, field를 다른 class에서 사용할 수 있음.

```java
class Greeting {
	// public, protected, default, private
	public static void hi() {
		System.out.println("Hi");
	}
}

public class AccessLevelModifiersMethod {

	public static void main(String[] args) {
		Greeting.hi();
	}
}
```

## protected, default는 나중에 OOP 제대로 배우고 나서 하는게 효율적임
