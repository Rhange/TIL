# this와 super

`this`는 인스턴스를 가리키는 키워드이다.

이와 비슷하게 부모 클래스를 가리키는 `super`라는 키워드가 존재한다.

자식 클래스에서 `super`를 이용하여 **접근 권한이 부여된** 부모 클래스의 변수와 메소드를 사용할 수 있다.

```java
class Cal {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}

	// Overloading
	public int sum(int v1, int v2, int v3) {
		// 'this' is itself
		return this.sum(v1, v2) + v3;
	}
}

class Cal3 extends Cal {
	public int minus(int v1, int v2) {
		return v1 - v2;
	}

	// Overriding
	// subclass(Cal3) overrides superclass(Cal)'s 'sum' method
	// by adding 'System.out.println("Cal3!!!");'
	public int sum(int v1, int v2) {
		System.out.println("Cal3!!!");
		// 'super' means parent class
		return super.sum(v1, v2);
	}
}
```
