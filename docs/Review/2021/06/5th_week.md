# 5주차 (메뉴얼과 자바고수)

## 06.28 월요일

- [x] MySQL-Pentaho 연동 메뉴얼 작성하기
  - [x] 1.  MySQL 설치 과정 화면 캡쳐
  - [x] 1-1. 펜타호에서 MySQL DB 연결 테스트 성공 화면 캡쳐
  - [x] 1-2. `INSERT` 와 `UPSERT` 테스트 성공화면 캡쳐
  - [x] 2.  Markdown으로 메뉴얼 작성
  - [x] 3.  PPT 메뉴얼 작성
- [x] MS SQL-Pentaho 연동 메뉴얼 작성하기
  - [x] 1.  MS-SQL 설치 과정 화면 캡쳐
  - [x] 1-1. SSMS(SQL Server Management Studio) 설치

### 펜타호 MySQL DB 연동 문제점

1. 연동 할 때, DB 이름을 명시해주어도 MySQL 내부에 있는 모든 DB의 table 목록들을 전부 보여줌
2. '스키마 찾아보기' 버튼은 작동하지 않음

## 06.29 화요일

MSSQL 연동 메뉴얼 작성

- [x] 1-1. 펜타호에서 MS-SQL DB 연결 테스트 성공 화면 캡쳐
- [x] 1-2. `INSERT` 와 `UPSERT` 테스트 성공화면 캡쳐
- [x] 2.  Markdown으로 설치 메뉴얼 작성
- [x] 3.  PPT MS-SQL 연동 메뉴얼 작성

- 현재 설치된 MS SQL Server 2019를 삭제하고 2017로 다시 설치해서 해볼 것
- [https://www.microsoft.com/en-us/sql-server/developer-tools](https://www.microsoft.com/en-us/sql-server/developer-tools) MSSQL Developer Edition
- [x] MSSQL 2017 설치
- [x] JDBC 설치 참고 ([https://stackoverflow.com/questions/58026844/pentaho-cannot-connect-to-sql-server-2017](https://stackoverflow.com/questions/58026844/pentaho-cannot-connect-to-sql-server-2017))
- [x] `sqljdbc_auth.dll` 파일을 아래의 두 경로에 추가
  1. `data-integration\libswt\win64`
  2. `data-integration\libswt\win32`
- [x] `mssql-jdbc-7.4.1.jre8.jar` 파일을 `data-integration\lib` 경로에 추가
- [x] pentaho에서 MSSQL DB 연동 확인

- 사무실 리모델링

## 06.30 수요일

1. `batch file` 에 대한 조사
   - [위키백과 설명](https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%B9%98_%ED%8C%8C%EC%9D%BC)
   - `.bat` 파일은 명령 인터프리터에 의해 실행 되게끔 고안된 명령어들이 나열되어 있는 텍스트 파일
   - `shell` 프로그램이 파일을 읽어 명령어를 줄 단위로 실행
   - batch 파일은 보통 '실행 파일'을 자동으로, 연속적으로 실행할 때 유용하며 시스템 관리자가 다분한 일들을 자동화하기 위해 자주 사용한다.
2. 선임이 작성한 `spoon.bat` 파일 시작log 따라가면서 분석
3. 'karaf'에 대한 조사 및 분석 정리

- Kenet 페이스북 그룹 참여, [https://www.facebook.com/groups/kenetframework](https://www.facebook.com/groups/kenetframework)

- 오후 3시 미팅 (PM 3:00 ~ 3:45)
- 저녁에 먹은 오리고기의 효과가 집에 와서 나타남

## 07.01 목요일

### Bix5 교육 (10:00~13:00)

- Bix5 전체 구조 설명 (chart, map, dashboard)
- Html로 기본적인 tag를 만들어서 DOM으로 활용
- 전체적인 디자인이나 데이터를 넣을 위치 및 JSON 타입 데이터의 KEY Naming은 XML 파일에서 설정함
- 데이터는 ajax로 불러올 수도 있고, 로컬에서 데이터를 넣을 수도 있음.
- 대부분의 차트는 `[{...}, {...}, ...]` 모습의 objects in array 데이터를 받음

- 펜타호 DB 연동 메뉴얼(ppt) 구글 드라이브 업로드

## 07.02 금요일

- MSSQL 2019 developer version 펜타호 연동 테스트 -> 성공 확인
- 주간 미팅 (9:30~10:40)
  - 펜타호 코드 리뷰할 때, 구글링에서 코드 리뷰하는 방법에 대한 것 조사후 착수하기
  - 펜타호 메뉴얼 PDF를 상품 메뉴얼처럼 왼쪽 사이드 메뉴에 목차 나오고 클릭하면 해당 페이지로 가도록 만들기 (+Cover +목차)
- 개발자 미팅 (15:45~16:20)
  1. `Spoon.bat` 파일 코드 리뷰 마무리
  2. `Launcher.jar` 코드 리뷰
  3. 마인케이 미팅 내용 순차적으로
     1. registerUI method
     2. `Spoon.class` main method > init, start methods
     3. 펜타호 각 버튼들에 대한 method와 로직 파악
     4. 펜타호 메인 화면의 UI Frame 구조 (JFrame library)
     5. Drag & Drop 코드 로직 파악 (JFrame MouseListener or MouseMotionListener 활용 추측)

## 07.03 토요일

- `Spoon.bat` & `set-pentaho-env.bat` 코드 리뷰
- `90%` 정도 완료
- 점심: 서브웨이, 터키 아보카도 플랫브래드 아메리칸 올리브오일 레드와인식초
- 저녁: 삼겹살
