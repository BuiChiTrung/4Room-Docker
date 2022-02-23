TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`%` TRIGGER `add_notification_of_follow` AFTER INSERT ON `follows`\n FOR EACH ROW BEGIN\n	IF NEW.source_id != NEW.target_id THEN\n    	INSERT INTO notifications\n        (notifications.user_id, notifications.follow_id, notifications.created_at, notifications.updated_at)\n		VALUES\n        (NEW.target_id, NEW.id, NEW.created_at, NEW.updated_at);\n    END IF;\nEND'
sql_modes=1436549152
definers='root@%'
client_cs_names='utf8mb4'
connection_cl_names='utf8mb4_unicode_ci'
db_cl_names='utf8mb4_general_ci'
created=164561117026
