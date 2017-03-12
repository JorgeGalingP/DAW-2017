package appSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import appSpring.repository.ResourceCopyRepository;
import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;
import appSpring.entity.Resource;
import appSpring.entity.ResourceType;

@Controller
public class ResourceController {

	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private ResourceTypeRepository resourceTypeRepo;
	@Autowired
	private ResourceCopyRepository resourceCopyRepo;

	@RequestMapping("/{id}")
	public String bookProfile(Model model, @PathVariable Integer id) {

		Resource resource = resourceRepository.findOne(id);
		Long num = resourceCopyRepo.countByResource(resource);
		List<Resource> similarResources = resourceRepository.findByGenreAndIdNot(resource.getGenre(), resource.getId());

		model.addAttribute("resource", resource);
		model.addAttribute("available", (num > 0) ? 1 : 0);
		model.addAttribute("similarResources", similarResources);
		model.addAttribute("index", true);

		return "profileBook";
	}

	@RequestMapping(value = "/moreBooks")
	public String moreBooks(Model model, @RequestParam int page) {

		ResourceType type = resourceTypeRepo.findOneByName("Libro");
		Page<Resource> books = resourceRepository.findByResourceType(type, new PageRequest(page, 2));
		model.addAttribute("items", books);

		return "listItemsPage";
	}

	@RequestMapping(value = "/moreMagazines")
	public String moreMagazines(Model model, @RequestParam int page) {

		ResourceType type = resourceTypeRepo.findOneByName("Revista");
		Page<Resource> revistas = resourceRepository.findByResourceType(type, new PageRequest(page, 2));
		model.addAttribute("items", revistas);

		return "listItemsPage";
	}

	@RequestMapping(value = "/moreAllShelf")
	public String moreAllShelf(Model model, @RequestParam int page) {

		Page<Resource> allShelf = resourceRepository.findAll(new PageRequest(page, 2));
		model.addAttribute("items", allShelf);

		return "listItemsPage";
	}

}
