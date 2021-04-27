select c.id, c.username, p.username as parentUserName from child c LEFT JOIN parent p ON c.parent = p.id
