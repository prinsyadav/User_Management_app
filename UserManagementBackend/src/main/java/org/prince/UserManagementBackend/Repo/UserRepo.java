package org.prince.UserManagementBackend.Repo;

import org.prince.UserManagementBackend.Model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserData, Long> {
}
