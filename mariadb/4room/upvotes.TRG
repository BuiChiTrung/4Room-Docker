TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`%` TRIGGER `add_notification_of_upvote` AFTER INSERT ON `upvotes`\n FOR EACH ROW BEGIN\n	DECLARE post_owner INTEGER;\n	SELECT posts.user_id INTO post_owner FROM posts WHERE posts.id = NEW.post_id LIMIT 1;\n    IF NEW.user_id != post_owner THEN\n    	INSERT INTO notifications\n        (notifications.user_id, notifications.upvote_id, notifications.created_at, notifications.updated_at)\n        VALUES\n        (post_owner, NEW.id, NEW.created_at, NEW.updated_at);\n	END IF;        \nEND'
sql_modes=1436549152
definers='root@%'
client_cs_names='utf8mb4'
connection_cl_names='utf8mb4_unicode_ci'
db_cl_names='utf8mb4_general_ci'
created=164561117023
