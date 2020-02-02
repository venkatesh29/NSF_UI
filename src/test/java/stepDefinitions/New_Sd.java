package stepDefinitions;

import org.apache.poi.ss.usermodel.Sheet;
import org.openqa.selenium.WebDriver;

public class New_Sd {
	
	public class Step_ClinicalMassEditLayoutandfunctionality{
		static WebDriver driver;
		public static Sheet JSheet, MSheet;
		public Step_ClinicalMassEditLayoutandfunctionality() ;
		this.driver = Hooks.driver;
	}

}
