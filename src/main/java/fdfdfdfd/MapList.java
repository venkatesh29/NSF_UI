package fdfdfdfd;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class MapList {

	public static void main(String[] args) {
		ArrayList<String> lt= new ArrayList<String>(); 
		ArrayList<String> lt1 = new ArrayList<String>(); 
		ArrayList<ArrayList<String>> map = new ArrayList<ArrayList<String>>(); 
		
		 	lt.add("Geeks"); 
	        lt.add("For"); 
	        lt.add("Geeks"); 
	        lt.add("GeeksForGeeks"); 
	        
	        map.add(lt);
	        
	        lt.clear();
	        
	        lt.add("Geeks"); 
	        lt.add("For"); 
	        lt.add("Geeks"); 
	        lt.add("GeeksForGeeks"); 
	        
	        map.add(lt);
	    
	        System.out.println(map);
	        
	}

}
