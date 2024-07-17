package todo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import todo.dto.Todo;
import todo.dto.TodoMember;

@Mapper
public interface TodoMapper {
	int idCheck(String id);
	int signup (TodoMember member);
	TodoMember login(TodoMember member);
	List <Todo> selectTodoList(int todoMemberNo);
	int insert(Todo todo);
	int update(Todo todo);
	int delete(int todoNo);
	
	/*
	int idCheck(String id);
	int signup (멤버 DTO);
	멤버DTO login(멤버 DTO);
	List<할일 DTO> selectTodoList(int todoMemberNo);
	int insert(할일 DTO);
	int update(할일 DTO);
	int delete(int todoNo); 
	 */
}
