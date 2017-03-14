package Repository;

import org.springframework.data.repository.CrudRepository;

import Entity.User;


public interface UserRepository  extends CrudRepository<User,Integer>{
	
	User findByName(String name);

}