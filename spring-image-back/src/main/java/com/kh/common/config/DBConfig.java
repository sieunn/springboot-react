package com.kh.common.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.metadata.HikariDataSourcePoolMetadata;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration //springboot 설정
@PropertySource("classpath:/config.properties")
public class DBConfig {

	@Autowired
	private ApplicationContext applicationContext;
	
	@Bean // 스프링푸트에서 객체로 존재한다는 의미  
	@ConfigurationProperties(prefix="spring.datasource.hikari")
	public HikariConfig hikariConfig() {
		return new HikariConfig();
	}
	/*
	 * application.properties나 config.properties에 작성해야 할 hikariConfig를 자바에서 작성
	 * 
	 * prefix = 시작
	 * spring.datasource.hikari로 시작하는 모든 정보 가져오기
	 * suffix = 끝
	 * 
	 * 
	 * */
	
	//연결에 대한 정보
	@Bean
	public DataSource dataSource(HikariConfig config) {
		DataSource dataSource = new HikariDataSource(config);
		return dataSource;
	}

	//db와 java 관련된 추가 옵션 sql 코드 폴더는 어디있는지
	//db와 java 컬럼명과 변수명이 일치하지 않을 때 서로 어떻게 바라보게 하는지
	@Bean //DTO랑 테이블 컬럼명 설정
	public SqlSessionFactory sessionFactory(DataSource dataSource) throws Exception{
		SqlSessionFactoryBean sfb = new SqlSessionFactoryBean();
		sfb.setDataSource(dataSource);
		sfb.setMapperLocations(applicationContext.getResources("classpath:/mappers/**.xml"));
		sfb.setTypeAliasesPackage("com.kh.dto"); //본인의 model이 작성되어있는 패키지 폴더 위치 설정
		//db와 java 컬럼명과 변수명이 일치하지 않을 때 서로 어떻게 바라보게 하는지 설정
		//db member_id    dto memberId
		sfb.setConfigLocation(applicationContext.getResource("classpath:mybatis-config.xml"));
		return sfb.getObject();
	}
	
	//select insert update delete sql 작성
	@Bean
	public SqlSessionTemplate st(SqlSessionFactory sf) {
		return new SqlSessionTemplate(sf);
	}
	
	//트랜잭션 = commit rollback
	//데이터베이스에서 crud 작업이 일어나면 작업에 대한 결과를 관리
	@Bean
	public DataSourceTransactionManager dtm (DataSource ds) {
		return new DataSourceTransactionManager(ds);
	}
}




