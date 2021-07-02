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
