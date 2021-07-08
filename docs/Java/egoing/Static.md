# Static

> static이 붙어 있으면 class method이다.

## Static variable and method

static variable과 method는 class에서 생성된 모든 instance가 `공유하는 자원`이다.
그리고 instance를 만들지 않고도 class에서 **직접 호출할 수 있다.**

<br/>

```java
class Print {

	public static void a(String delimiter) {
		System.out.println(delimiter);
		System.out.println("a");
		System.out.println("a");
	}

	public static void b(String delimiter) {
		System.out.println(delimiter);
		System.out.println("b");
		System.out.println("b");
	}

}

public class StaticMethod {

	public static void main(String[] args) {
		Print.a("-");
		Print.b("-");

		Print.a("*");
		Print.b("*");
	}

}
```

<br/>

> no static이면 instance method이다.

<br/>

```java
class Print {

    public String delimiter;
    // method가 instance의 소속이면 'static'을 제거해야 한다.
    public void a() {
    	System.out.println(this.delimiter);
    	System.out.println("a");
    	System.out.println("a");
    }

    public void b() {
    	System.out.println(this.delimiter);
    	System.out.println("b");
    	System.out.println("b");
    }

}

public class StaticMethod {

    public static void main(String[] args) {
        // Instance
    	Print t1 = new Print();
    	t1.delimiter = "-";
    	t1.a();
    	t1.b();

    	// Instance
    	Print t2 = new Print();
    	t2.delimiter = "*";
    	t2.a();
    	t2.b();
    }

}

```

<br/>

## Instance에서 static variable 값 변경

class에서 `static` variable을 가지고 있고 해당 class를 instance화 시킨 후에 `static` variable을 수정한다면 해당 class의 `static` variable은 물론이고 그로부터 생성된 모든 instance의 해당 `static` variable 모두가 바뀐다.

예제 소스코드

```java
class Foo {
	public static String classVar = "I class var";

	public String instanceVar = "I instance var";

	public static void classMethod() {
		System.out.print(classVar);	// OK
		System.out.print(instanceVar);	// Error
	}

	public void instanceMethod() {
		System.out.print(classVar);	// OK
		System.out.print(instanceVar);	// OK
	}
}

public class StaticApp {

	public static void main(String[] args) {
		System.out.println(Foo.classVar); // OK
		System.out.println(Foo.instanceVar); // Error

		Foo.classMethod();	// OK
		Foo.instanceMethod(); // Error

		Foo f1 = new Foo();
		Foo f2 = new Foo();

		System.out.println(f1.classVar);	// I class var
		System.out.println(f1.instanceVar);	// I instance var

		f1.classVar = "changed by f1";
		System.out.println(Foo.classVar); 	// changed by f1
		System.out.println(f2.classVar); 	// changed by f1

		f1.instanceVar = "changed by f1";
		System.out.println(f1.instanceVar); // changed by f1
		System.out.println(f2.instanceVar); // I instance var
	}
}

```

Instance를 생성하지 않고 class에서 바로 instance의 variable과 method에 **접근할 수 없다.**

즉, `static`이 아닌 variable과 method는 instance를 생성해야 비로소 접근할 수 있게 된다.

`static variable과 method`는 해당 class로 생성된 `모든 instance`가 `공유하는 자원`이기 때문에 instance 모두는 같은 `static variable, method`를 사용할 수 있다.

반면 `static이 아닌` variable과 method는 instance마다 `고유의 값`을 가지기 때문에 instance에서 변경한다고 해도 다른 instance에 어떠한 영향도 끼치지 않는다.

[출처 - 자바2, 부스트코스](https://www.boostcourse.org/cs128/lecture/264950/?isDesc=false)
